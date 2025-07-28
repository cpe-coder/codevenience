"use client";

import { Google } from "@/constant/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff, Scan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const router = useRouter();

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		try {
			console.log(values);
		} catch (error) {
			console.error("Error during sign in:", error);
		}
	};

	const handleClick = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<div className="px-auto mx-auto md:px-8 lg:px-14">
			<div className="flex flex-col items-center justify-center shadow-2xl rounded-lg p-5 gap-4">
				<div className="p-2 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center gap-2">
					<Scan size={60} />
				</div>
				<div className="flex flex-col items-center gap-1 pb-3 ">
					<h1 className="font-bold text-slate-700 text-xl text-wrap">
						Welcome Back
					</h1>
					<p className="text-slate-500 font-medium text-xs text-wrap">
						Sign in to access your business dashboard
					</p>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full max-w-xs sm:max-w-sm md:w-[350px] px-2 sm:px-0"
					>
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className=" text-slate-500 text-sm sm:text-base"
							>
								Email address
							</Label>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Enter your email address"
												className="rounded-md text-slate-500 bg-slate-200 w-full active:outline-none focus:outline-none text-sm sm:text-base"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Label
								htmlFor="password"
								className="text-slate-500 text-sm sm:text-base"
							>
								Password
							</Label>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Enter your password"
												className="rounded-md text-slate-500 bg-slate-200 w-full active:outline-none focus:outline-none text-sm sm:text-base"
												type={isPasswordVisible ? "text" : "password"}
												{...field}
												passwordComponents={
													<Button
														onClick={handleClick}
														className="bg-transparent border-0 hover:bg-transparent focus:bg-transparent justify-end hover:cursor-pointer"
													>
														{isPasswordVisible ? (
															<EyeOff className="text-slate-500" />
														) : (
															<Eye className="text-slate-500" />
														)}
													</Button>
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex justify-between gap-2 pt-4">
							<div className="flex items-center gap-1">
								<div>
									<Input
										type="checkbox"
										id="remember-me"
										className="w-4 h-4 p-0 m-0 bg-transparent active:bg-none focus:bg-none"
									/>
								</div>
								<div>
									<Label className="text-slate-500" htmlFor="remember-me">
										<span className="text-xs">Remember me for 30 days</span>
									</Label>
								</div>
							</div>
							<div>
								<Link href={"/forgot-password"}>
									<p className="text-purple-600 text-xs hover:text-purple-900">
										Forgot password?
									</p>
								</Link>
							</div>
						</div>

						<Button
							onClick={() => router.push("/profile")}
							className="w-full mt-8 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:transition-all hover:duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 duration-300 transition-all hover:cursor-pointer rounded-md"
							type="submit"
						>
							<span>Sign In to Dashboard</span>
							<ArrowRight />
						</Button>
					</form>
				</Form>
				<div className=" w-full flex flex-row items-center justify-between gap-1">
					<div className="w-auto rounded-md bg-slate-300 h-[4px]"></div>
					<div className="w-auto">
						<p className="text-slate-500 text-xs font-medium">
							OR CONTINUE WITH
						</p>
					</div>
					<div className="w-auto rounded-md bg-slate-300 h-[2px]"></div>
				</div>
				<div className="w-full flex items-center">
					<Button
						className="w-full hover:cursor-pointer py-2 gap-4 bg-white border items-center justify-center border-slate-300 hover:bg-slate-100 hover:transition-all hover:duration-200 duration-200 transition-all rounded-md"
						type="button"
					>
						<Image src={Google} alt="Google" className="w-4" />
						<span className="text-slate-500">Sign in with Google</span>
					</Button>
				</div>
			</div>
			<div className="w-full flex justify-center items-center mt-6">
				<div className="flex gap-2 items-center text-xs text-black">
					<p className="text-slate-500">Don&apos;t have account?</p>
					<Link
						className="text-purple-600 text-xs hover:text-purple-900"
						href={"/sign-up"}
					>
						Create your free account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignInForm;
