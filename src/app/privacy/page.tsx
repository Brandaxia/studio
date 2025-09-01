import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold">Privacy Policy</h1>
            <p className="lead">
              At Ainsophic Academy, your privacy is a manifestation of our commitment to respect and trust. This policy details how we protect the information you entrust to us.
            </p>

            <h2>1. The Information We Receive</h2>
            <p>
              We collect information you provide to us directly, such as when you register for a course, contact us, or participate in our community. This may include your name, email, and learning history. We also automatically collect technical data, such as your IP address and browser type, to ensure the integrity of our platform.
            </p>

            <h2>2. How We Use Your Data</h2>
            <p>
              We use your information to personalize your learning journey, provide support, process your enrollments, and communicate with you about our programs. The data also helps us improve and optimize our platform for the entire community of learners.
            </p>

            <h2>3. Sharing Knowledge, Not Your Data</h2>
            <p>
              We do not sell or rent your personal information. We may share data with trusted service providers who assist us in operating the academy (such as payment processors or analytics platforms), always under strict confidentiality agreements. We may also disclose information if required by law.
            </p>

            <h2>4. Cookies and Connection Technologies</h2>
            <p>
              We use cookies to maintain your session, remember your preferences, and understand how you interact with our platform. These small beacons of light allow us to offer you a smooth and consistent experience. You can manage your cookie preferences through your browser settings.
            </p>

            <h2>5. The Security of Your Learning</h2>
            <p>
              We implement technical and organizational security measures to protect your information against unauthorized access, alteration, or destruction. Your trust is the foundation of our academy, and we protect it with the utmost diligence.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to the processing of your data. To exercise these rights, please contact us through the channels provided on our contact page.
            </p>

            <h2>7. Updates to this Policy</h2>
            <p>
              As our academy evolves, so will our privacy policy. We will notify you of any significant changes. The date of the last update will be reflected at the end of this page.
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
