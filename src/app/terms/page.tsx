import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold">Terms and Conditions of Use</h1>
            <p className="lead">
              Welcome to Ainsophic Academy. By accessing our academy, you agree to be bound by these terms, which constitute a pact for the advancement of collective knowledge.
            </p>

            <h2>1. Use of the Platform</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and make personal, non-commercial use of our programs and content. You agree not to use the platform for illegal purposes or in a way that infringes the rights of others.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content in the academy, including courses, texts, graphics, logos, and software, is the property of Ainsophic Academy or its licensors and is protected by intellectual property laws. Reproduction, distribution, or modification without our explicit consent is not permitted.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You accept responsibility for all activities that occur under your account. We reserve the right to suspend or terminate accounts if these terms are violated.
            </p>

            <h2>4. Payments and Enrollments</h2>
            <p>
              Program fees are clearly indicated at the time of enrollment. Payments are processed through secure gateways. Refund policies, if any, will be specified for each program individually.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Our programs are offered "as is." While we strive to offer the highest quality content, we do not guarantee specific learning outcomes. Our liability is limited to the amount paid for the program.
            </p>

            <h2>6. Third-Party Links and Embedded Content</h2>
            <p>
              The platform may contain links to third-party sites or embedded content (such as Colab notebooks or videos). We are not responsible for the content or privacy practices of these services.
            </p>

            <h2>7. Modification and Termination</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the platform after changes implies your acceptance. We may also, at our discretion, suspend or terminate your access to the academy.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
