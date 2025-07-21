"use client";

import { Google } from "@/constant/icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().min(1, "Email is required").email("Invalid email"),
	businessName: z.string().min(1, "Business name is required"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
	confirmPassword: z
		.string()
		.min(1, "Confirm password is required")
		.min(8, "Password must have than 8 characters"),
});

const SignUpForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

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
		<div className="px-14">
			<div className="flex flex-col items-center justify-center shadow-2xl rounded-lg p-5 gap-4">
				<div className="flex flex-col items-center gap-1 pb-4 ">
					<h1 className="font-bold text-slate-700 text-xl text-wrap">
						Create Your Account
					</h1>
					<p className="text-slate-500 font-medium text-sm text-wrap">
						Join thousands of successful businesses
					</p>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
						<div className="space-y-2">
							<div className="flex gap-2 w-[350px] ">
								<div className="flex flex-col space-y-2">
									<Label htmlFor="firstName" className="text-slate-500">
										First Name *
									</Label>
									<FormField
										control={form.control}
										name="firstName"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="John"
														className=" text-slate-500 bg-slate-200 rounded-md mb-2 active:outline-none focus:outline-none"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="firstName" className="text-slate-500">
										Last Name *
									</Label>
									<FormField
										control={form.control}
										name="lastName"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="Doe"
														className=" text-slate-500 bg-slate-200 rounded-md mb-2 active:outline-none focus:outline-none"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>

							<Label htmlFor="email" className="text-slate-500">
								Work Email *
							</Label>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="john@gmail.com"
												className=" text-slate-500 bg-slate-200 rounded-md mb-2 active:outline-none focus:outline-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="w-full border mb-4"></div>
							<Label htmlFor="email" className="text-slate-500">
								Business Name *
							</Label>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Your Business Name"
												className=" text-slate-500 bg-slate-200 rounded-md mb-2 active:outline-none focus:outline-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="w-full border mb-4"></div>
							<div className="flex gap-2 w-[350px] ">
								<div className="space-y-2">
									<Label htmlFor="password" className="text-slate-500">
										Create Password *
									</Label>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="Create password"
														className=" rounded-md text-slate-500 bg-slate-200 active:outline-none focus:outline-none"
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
								<div className="space-y-2">
									<Label htmlFor="confirmPassword" className="text-slate-500">
										Confirm Password *
									</Label>
									<FormField
										control={form.control}
										name="confirmPassword"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder="Confirm password"
														className=" rounded-md text-slate-500 bg-slate-200 active:outline-none focus:outline-none"
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
							</div>
						</div>

						<Button
							className="w-full mt-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:transition-all hover:duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 duration-300 transition-all hover:cursor-pointer rounded-md"
							type="submit"
						>
							<span>Create Account</span>
							<ArrowRight />
						</Button>
					</form>
				</Form>
				<div className="flex gap-2 items-center">
					<div className="border"></div>
					<div>
						<p className="text-slate-500 text-xs font-medium">
							OR CONTINUE WITH
						</p>
					</div>
					<div className="border"></div>
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
						href={"/sign-in"}
					>
						Sign in here
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
