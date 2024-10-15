import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Free Next.js Template for Startup and SaaS",
  description: "This is the Forgot Password Page for Startup Nextjs Template",
  // other metadata
};

const ForgotPasswordPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Forgot Password
                </h3>
                <p className="mb-8 text-center text-base font-medium text-body-color">
                  Enter your email to reset your password
                </p>
                <form>
                  <div className="mb-8">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Reset Password
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Remember your password?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background SVG */}
        <div className="absolute left-0 top-0 z-[-1]">
          {/* ... (SVG code remains the same as in the signin page) ... */}
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordPage;