import { ctaFormSchema } from '@/lib/schemas/contact';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');

  if (!contentType?.includes('application/json')) {
    return Response.json(
      { success: false, error: 'Unsupported media type' },
      { status: 415 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: 'Invalid form data' },
      { status: 400 },
    );
  }

  const submission = ctaFormSchema.safeParse(body);

  if (!submission.success) {
    return Response.json(
      { success: false, error: 'Invalid form data' },
      { status: 400 },
    );
  }

  console.info(
    '[contact-stub] Valid project inquiry received',
    submission.data,
  );

  return Response.json(
    {
      success: true,
      message: "Thank you! We'll be in touch within 48 hours.",
    },
    { status: 200 },
  );
}
