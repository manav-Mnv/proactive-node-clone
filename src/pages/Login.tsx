import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Login() {
    const { loginWithGoogle, loginWithGitHub, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as any)?.from?.pathname || "/";

    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            toast.error("Failed to login with Google");
            console.error(error);
        }
    };

    const handleGitHubLogin = async () => {
        try {
            await loginWithGitHub();
        } catch (error) {
            toast.error("Failed to login with GitHub");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-500/5 via-background to-background" />

            <main className="flex-1 flex items-center justify-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md text-center"
                >
                    {/* Logo */}
                    <Link to="/" className="inline-flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">P</span>
                        </div>
                        <span className="text-foreground font-semibold text-xl">Proactiv</span>
                    </Link>

                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                        Welcome Back
                    </h1>

                    <div className="flex flex-col gap-4 mb-6">
                        <Button
                            variant="outline"
                            className="w-full bg-background text-foreground hover:bg-muted gap-2 py-6"
                            onClick={handleGoogleLogin}
                        >
                            <IconBrandGoogle className="w-5 h-5" />
                            Continue with Google
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full bg-background text-foreground hover:bg-muted gap-2 py-6"
                            onClick={handleGitHubLogin}
                        >
                            <IconBrandGithub className="w-5 h-5" />
                            Continue with GitHub
                        </Button>
                    </div>


                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
