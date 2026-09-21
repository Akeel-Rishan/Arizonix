'use client';

import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Pause,
  Play,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { WorkflowConnector } from '@/components/sections/workflow-connector';
import {
  WorkflowNode,
  type WorkflowNodeState,
} from '@/components/sections/workflow-node';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { useWorkflowPlayer } from '@/hooks/use-workflow-player';
import { motion, useInView, useReducedMotion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { workflowSteps } from '@/lib/workflow-data';

const STEP_DURATION_MS = 2000;
const WORKFLOW_ARIA_LABEL =
  'Animated diagram showing Arizonix AI automation workflow: Customer Inquiry to AI Assistant to CRM Integration to Task Automation to Email Notifications to Business Analytics';

interface StatTile {
  icon: LucideIcon;
  label: string;
  value: string;
}

const statTiles: readonly StatTile[] = [
  {
    icon: Zap,
    label: 'Response Time',
    value: '10x Faster',
  },
  {
    icon: CheckCircle,
    label: 'Automation Accuracy',
    value: '99.9%',
  },
  {
    icon: Clock,
    label: 'AI Always On',
    value: '24/7',
  },
];

function getNodeState(
  stepIndex: number,
  activeStep: number,
  completedSteps: ReadonlySet<number>,
  showStaticCompleted: boolean,
): WorkflowNodeState {
  if (showStaticCompleted) {
    return 'completed';
  }

  if (stepIndex === activeStep) {
    return 'active';
  }

  return completedSteps.has(stepIndex) ? 'completed' : 'idle';
}

function getConnectorState(
  connectorIndex: number,
  activeStep: number,
  showStaticCompleted: boolean,
) {
  if (showStaticCompleted) {
    return 'completed';
  }

  if (activeStep === connectorIndex + 1) {
    return 'active';
  }

  return activeStep > connectorIndex + 1 ? 'completed' : 'idle';
}

function WorkflowControls({
  goNext,
  goPrev,
  isPlaying,
  togglePlay,
}: Pick<
  ReturnType<typeof useWorkflowPlayer>,
  'goNext' | 'goPrev' | 'isPlaying' | 'togglePlay'
>) {
  const playLabel = isPlaying
    ? 'Pause automation sequence'
    : 'Play automation sequence';
  const PlayIcon = isPlaying ? Pause : Play;

  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <button
        aria-label="Previous step"
        className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        onClick={goPrev}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-4" />
      </button>
      <button
        aria-label={playLabel}
        className="inline-flex size-11 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white shadow-glow-blue transition duration-200 hover:-translate-y-0.5 hover:shadow-glow-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        onClick={togglePlay}
        type="button"
      >
        <PlayIcon aria-hidden="true" className="size-4" />
      </button>
      <button
        aria-label="Next step"
        className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        onClick={goNext}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}

export function AIAutomation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const isInView = useInView(sectionRef, { amount: 0.35, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();
  const showStaticCompleted = hasMounted && Boolean(reducedMotion);
  const { activeStep, completedSteps, goNext, goPrev, isPlaying, togglePlay } =
    useWorkflowPlayer({
      isInView: isInView && !showStaticCompleted,
      stepDuration: STEP_DURATION_MS,
      totalSteps: workflowSteps.length,
    });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section
      className="overflow-hidden border-y border-white/10"
      id="ai-automation"
      ref={sectionRef}
      variant="aurora"
    >
      <Container>
        <SectionHeading
          description="Arizonix builds intelligent automation pipelines that remove repetitive work, reduce operational errors, and scale your business without adding headcount."
          eyebrow="AI AUTOMATION"
          title={
            <>
              Watch Your Business Run On{' '}
              <span className="text-gradient">Autopilot</span>
            </>
          }
        />

        <motion.section
          aria-label={WORKFLOW_ARIA_LABEL}
          className="mt-14 lg:mt-16"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <div className="md:hidden">
            {workflowSteps.map((step, index) => (
              <motion.div key={step.id} variants={fadeInUp}>
                <WorkflowNode
                  reducedMotion={showStaticCompleted}
                  state={getNodeState(
                    index,
                    activeStep,
                    completedSteps,
                    showStaticCompleted,
                  )}
                  step={step}
                />
                {index < workflowSteps.length - 1 ? (
                  <WorkflowConnector
                    orientation="vertical"
                    reducedMotion={showStaticCompleted}
                    state={getConnectorState(
                      index,
                      activeStep,
                      showStaticCompleted,
                    )}
                  />
                ) : null}
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block xl:hidden">
            {workflowSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div key={step.id} variants={fadeInUp}>
                  <div className="grid grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] items-center gap-4">
                    <div className={cn(!isLeft && 'col-start-3')}>
                      <WorkflowNode
                        reducedMotion={showStaticCompleted}
                        state={getNodeState(
                          index,
                          activeStep,
                          completedSteps,
                          showStaticCompleted,
                        )}
                        step={step}
                      />
                    </div>
                    <div className="col-start-2 row-start-1 mx-auto flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300">
                      {step.id}
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 ? (
                    <WorkflowConnector
                      orientation="vertical"
                      reducedMotion={showStaticCompleted}
                      state={getConnectorState(
                        index,
                        activeStep,
                        showStaticCompleted,
                      )}
                    />
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          <div className="hidden xl:block">
            <div className="grid grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)] items-center gap-5">
              {workflowSteps.slice(0, 3).map((step, index) => (
                <motion.div
                  className={cn(
                    index === 0 && 'col-start-1',
                    index === 1 && 'col-start-3',
                    index === 2 && 'col-start-5',
                  )}
                  key={step.id}
                  variants={fadeInUp}
                >
                  <WorkflowNode
                    reducedMotion={showStaticCompleted}
                    state={getNodeState(
                      index,
                      activeStep,
                      completedSteps,
                      showStaticCompleted,
                    )}
                    step={step}
                  />
                </motion.div>
              ))}

              <div className="col-start-2 row-start-1">
                <WorkflowConnector
                  orientation="horizontal"
                  reducedMotion={showStaticCompleted}
                  state={getConnectorState(0, activeStep, showStaticCompleted)}
                />
              </div>
              <div className="col-start-4 row-start-1">
                <WorkflowConnector
                  orientation="horizontal"
                  reducedMotion={showStaticCompleted}
                  state={getConnectorState(1, activeStep, showStaticCompleted)}
                />
              </div>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)] gap-5">
              <div className="col-start-5 mx-auto">
                <WorkflowConnector
                  orientation="vertical"
                  reducedMotion={showStaticCompleted}
                  state={getConnectorState(2, activeStep, showStaticCompleted)}
                />
              </div>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)] items-center gap-5">
              <motion.div className="col-start-5" variants={fadeInUp}>
                <WorkflowNode
                  reducedMotion={showStaticCompleted}
                  state={getNodeState(
                    3,
                    activeStep,
                    completedSteps,
                    showStaticCompleted,
                  )}
                  step={workflowSteps[3]}
                />
              </motion.div>

              <div className="col-start-4 row-start-1">
                <WorkflowConnector
                  orientation="horizontal"
                  reducedMotion={showStaticCompleted}
                  state={getConnectorState(3, activeStep, showStaticCompleted)}
                />
              </div>

              <motion.div
                className="col-start-3 row-start-1"
                variants={fadeInUp}
              >
                <WorkflowNode
                  reducedMotion={showStaticCompleted}
                  state={getNodeState(
                    4,
                    activeStep,
                    completedSteps,
                    showStaticCompleted,
                  )}
                  step={workflowSteps[4]}
                />
              </motion.div>

              <div className="col-start-2 row-start-1">
                <WorkflowConnector
                  orientation="horizontal"
                  reducedMotion={showStaticCompleted}
                  state={getConnectorState(4, activeStep, showStaticCompleted)}
                />
              </div>

              <motion.div
                className="col-start-1 row-start-1"
                variants={fadeInUp}
              >
                <WorkflowNode
                  reducedMotion={showStaticCompleted}
                  state={getNodeState(
                    5,
                    activeStep,
                    completedSteps,
                    showStaticCompleted,
                  )}
                  step={workflowSteps[5]}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <WorkflowControls
          goNext={goNext}
          goPrev={goPrev}
          isPlaying={isPlaying && !showStaticCompleted}
          togglePlay={togglePlay}
        />

        <motion.div
          className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 lg:mt-12"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
        >
          {statTiles.map((tile) => {
            const Icon = tile.icon;

            return (
              <motion.div
                className="glass-panel p-6 text-center"
                key={tile.label}
                variants={fadeInUp}
              >
                <Icon
                  aria-hidden="true"
                  className="mx-auto mb-4 size-6 text-brand-cyan"
                />
                <p className="text-gradient text-3xl font-bold tracking-tight">
                  {tile.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{tile.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button
            href="/ai-automation"
            icon={ArrowRight}
            iconPosition="right"
            size="lg"
            variant="primary"
          >
            Explore AI Solutions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
