import nodemailer from "nodemailer";

export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from the API!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "narcoscafe8899@gmail.com",
      subject: "New Client wants to connect",
      text: `We have received a new submission from the client. Below are the details provided by the client:
      Name: ${firstname}\n Last-Name: ${lastname}\n Email: ${email}\nPhone: ${phone}`,
      html: `<p><strong>Name:</strong> ${firstname}</p>
             <p><strong>Last Name:</strong> ${lastname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
