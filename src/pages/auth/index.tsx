import { Input } from "@/components/ui/input"
import card from "../../assets/CARD.png"
import { EyeOff, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useGoogle } from "./service/mutation/useGoogle"
import { Link } from "react-router"
import google from "../../assets/google.svg"

export const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: googleMutate } = useGoogle()

    return (
        <div className=" container flex w-full">
            {/* Left Side - Hero Image */}
            <div className="w-1/2 items-center justify-center bg-background">
                <img
                    src={card}
                    alt="Login Hero"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-[740px] flex items-center justify-center bg-[#f6f9ff]">
                <div className="w-full max-w-[400px] space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Xush kelibsiz
                        </h1>
                        <p className="text-sm text-gray-500">
                            Kirish uchun elektron pochta va parolingizni kiriting
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Email
                            </label>
                            <Input
                                type="email"
                                placeholder="Loisbecket@gmail.com"
                                className="h-11"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Parol
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="h-11 pr-10"
                                />
                                <div
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600 transition-colors text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                </div>
                            </div>
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
                                >
                                    Meni eslaysizmi
                                </label>
                            </div>

                            <a
                                href="#"
                                className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
                            >
                                Parolni unutdingizmi?
                            </a>
                        </div>

                        {/* Login button */}
                        <Button className="w-full h-11 bg-black text-white hover:bg-black/90 rounded-md">
                            Tizimga kirish
                        </Button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Yoki
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                className="w-full h-11 bg-white hover:bg-gray-50 border-gray-200 text-gray-700 font-normal justify-center gap-2"
                                onClick={() => googleMutate()}
                            >
                                <img src={google} alt="Google" className="w-10 h-10" />
                                Google orqali
                            </Button>

                            <Button
                                className="w-full h-11 bg-[#0088cc] hover:bg-[#0077b3] text-white font-normal justify-center gap-2"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M9.993 15.674l-.397 5.588c.568 0 .814-.244 1.11-.537l2.665-2.53 5.52 4.04c1.012.558 1.73.264 1.983-.936L23.99 3.78v-.001c.296-1.347-.487-1.873-1.47-1.506L1.116 10.29c-1.31.508-1.29 1.236-.226 1.57l5.847 1.827L19.45 6.73c.599-.39 1.144-.174.695.216" />
                                </svg>
                                Telegram orqali
                            </Button>
                        </div>
                    </div>

                    {/* Register */}
                    <div className="text-center text-sm text-gray-500">
                        Hisobingiz yo‘qmi?{" "}
                        <Link to="#" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                            Ro‘yxatdan o‘tish
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}