'use client';

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import { ChevronRight, MousePointer2, Pause, Play } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

import { WorkflowConnector } from '@/components/sections/workflow-connector';
import { WorkflowNode } from '@/components/sections/workflow-node';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { useWorkflowPlayer } from '@/hooks/use-workflow-player';
import { aiWorkflows, type AIWorkflow } from '@/lib/ai-workflows-data';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';
import type { WorkflowStep } from '@/lib/workflow-data';

const categoryMap: Record<string, string> = {
  Sales: 'text-brand-blue',
  Finance: 'text-brand-cyan',
  Operations: 'text-brand-purple',
  HR: 'text-brand-blue',
};

function WorkflowCanvas({
  workflow,
  onSelect,
  selectedId,
}: {
  onSelect: (id: string) => void;
  selectedId?: string;
  workflow: AIWorkflow;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduced = useReducedMotion();
  const player = useWorkflowPlayer({
    isInView: inView && !reduced,
    stepDuration: 2000,
    totalSteps: workflow.nodes.length,
  });
  const steps = useMemo<WorkflowStep[]>(
    () =>
      workflow.nodes.map((item, index) => ({
        id: index + 1,
        icon: getIcon(item.icon),
        label: item.label,
        description: item.description,
        color: item.color,
      })),
    [workflow],
  );
  return (
    <div ref={ref}>
      <div
        aria-label={`${workflow.name} automation workflow with ${workflow.nodes.length} connected steps`}
        className="grid gap-3 md:grid-cols-[1fr_auto_1fr]"
        role="img"
      >
        {steps.map((step, index) => {
          const state =
            player.activeStep === index
              ? 'active'
              : player.completedSteps.has(index)
                ? 'completed'
                : 'idle';
          return (
            <div
              className={cn(
                'contents',
                index % 2 === 0 && index > 0 && 'md:col-start-1',
              )}
              key={workflow.nodes[index].id}
            >
              <WorkflowNode
                className="min-h-40 lg:min-h-44"
                onClick={() => onSelect(workflow.nodes[index].id)}
                reducedMotion={Boolean(reduced)}
                selected={selectedId === workflow.nodes[index].id}
                state={state}
                step={step}
              />
              {index < steps.length - 1 ? (
                <div className="flex items-center justify-center py-1 md:px-1">
                  <span className="md:hidden">
                    <WorkflowConnector
                      orientation="vertical"
                      reducedMotion={Boolean(reduced)}
                      state={state}
                    />
                  </span>
                  <span className="hidden w-8 md:block">
                    <WorkflowConnector
                      orientation="horizontal"
                      reducedMotion={Boolean(reduced)}
                      state={state}
                    />
                  </span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500">
        <button
          aria-label={
            player.isPlaying
              ? 'Pause automation sequence'
              : 'Play automation sequence'
          }
          className="glass-panel flex size-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-brand-cyan"
          onClick={player.togglePlay}
          type="button"
        >
          {player.isPlaying ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
        </button>
        <span>or click any step to explore</span>
      </div>
    </div>
  );
}

export function AIWorkflowBuilder() {
  const [workflowId, setWorkflowId] = useState(aiWorkflows[0].id);
  const [selectedId, setSelectedId] = useState<string>();
  const active =
    aiWorkflows.find((item) => item.id === workflowId) ?? aiWorkflows[0];
  const selected = active.nodes.find((item) => item.id === selectedId);
  return (
    <Section id="ai-workflow" variant="aurora">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="INTERACTIVE DEMO"
          title={
            <>
              See How AI Automation{' '}
              <span className="text-gradient">Actually Works</span>
            </>
          }
          description="Select a business use case and watch the AI workflow execute in real-time. Click any step to understand exactly what happens."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Choose a Workflow
            </p>
            <div className="space-y-3">
              {aiWorkflows.map((workflow) => (
                <button
                  aria-pressed={workflow.id === workflowId}
                  className={cn(
                    'glass-panel flex min-h-11 w-full items-center gap-3 rounded-xl px-4 py-3 text-left focus-visible:ring-2 focus-visible:ring-brand-cyan',
                    workflow.id === workflowId && 'gradient-border bg-white/10',
                  )}
                  key={workflow.id}
                  onClick={() => {
                    setWorkflowId(workflow.id);
                    setSelectedId(undefined);
                  }}
                  type="button"
                >
                  <span
                    className={cn('text-xs', categoryMap[workflow.category])}
                  >
                    {workflow.category}
                  </span>
                  <span className="flex-1 text-sm font-medium text-white">
                    {workflow.name}
                  </span>
                  {workflow.id === workflowId ? (
                    <ChevronRight className="size-4 text-brand-cyan" />
                  ) : null}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                animate={{ opacity: 1 }}
                className="mt-5 text-sm leading-6 text-slate-400"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key={workflowId}
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
            <div className="glass-panel mt-5 min-h-44 rounded-xl p-5">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    initial={{ opacity: 0, y: 8 }}
                    key={selected.id}
                  >
                    {(() => {
                      const Icon = getIcon(selected.icon);
                      return (
                        <>
                          <Icon className="size-6 text-brand-cyan" />
                          <h3 className="mt-3 font-semibold text-white">
                            {selected.label}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {selected.details}
                          </p>
                          <p className="mt-3 text-xs font-medium text-brand-purple">
                            Output: {selected.outputLabel}
                          </p>
                        </>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex min-h-32 flex-col items-center justify-center text-center text-slate-600"
                    key="prompt"
                  >
                    <MousePointer2 className="size-6" />
                    <p className="mt-3 text-sm">
                      Click any step to explore how it works
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <WorkflowCanvas
            key={workflowId}
            onSelect={setSelectedId}
            selectedId={selectedId}
            workflow={active}
          />
        </div>
      </div>
    </Section>
  );
}
