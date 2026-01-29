import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  name: string;
  email: string;
  service: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendApiKey);
    const { name, email, service, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      throw new Error("Missing required fields");
    }

    const emailResponse = await resend.emails.send({
      from: "Dushyant Garg <hey@dushyant.studio>",
      to: ["dushyantdishugarg@gmail.com"],
      reply_to: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #0a0a0a; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
            </div>
            
            <!-- Content -->
            <div style="background-color: #1a1a1a; padding: 30px; border-radius: 0 0 16px 16px;">
              <!-- Service Badge -->
              <div style="margin-bottom: 24px; text-align: center;">
                <span style="display: inline-block; background-color: #d4af37; color: #0a0a0a; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: 600; text-transform: uppercase;">
                  ${service}
                </span>
              </div>
              
              <!-- Contact Info -->
              <div style="background-color: #262626; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                <div style="margin-bottom: 16px;">
                  <p style="margin: 0 0 4px 0; color: #d4af37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                  <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 500;">${name}</p>
                </div>
                <div>
                  <p style="margin: 0 0 4px 0; color: #d4af37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                  <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #ffffff; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background-color: #262626; padding: 20px; border-radius: 12px;">
                <p style="margin: 0 0 12px 0; color: #d4af37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="margin: 0; color: #e0e0e0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <!-- Reply Button -->
              <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #d4af37; color: #0a0a0a; padding: 14px 32px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 16px;">
                  Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="margin-top: 24px; text-align: center;">
              <p style="margin: 0; color: #666666; font-size: 12px;">
                Sent from your portfolio contact form
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
