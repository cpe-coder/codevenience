"use client";

import { Eye, EyeOff, Scan } from "lucide-react";
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
		<div className="px-10">
			<div className="flex flex-col items-center justify-center shadow-2xl rounded-lg p-4 gap-4">
				<div className="p-2 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center gap-2">
					<Scan size={60} />
				</div>
				<div className="flex flex-col items-center gap-2">
					<h1 className="font-bold text-slate-700 text-2xl text-wrap">
						Welcome Back
					</h1>
					<p className="text-slate-500 font-medium text-md text-wrap  ">
						Sign in to access your business dashboard
					</p>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
						<div className="space-y-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Email address"
												className=" text-black bg-amber-200 rounded-full w-80 border-black border active:outline-none focus:outline-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Password"
												className=" rounded-full text-black bg-amber-200 w-80 border-black border active:outline-none focus:outline-none"
												type={isPasswordVisible ? "text" : "password"}
												{...field}
												passwordComponents={
													<Button
														onClick={handleClick}
														className="bg-transparent border-0 hover:bg-transparent focus:bg-transparent hover:cursor-pointer"
													>
														{isPasswordVisible ? (
															<EyeOff className="text-black" />
														) : (
															<Eye className="text-black" />
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
						<Button
							className="w-full mt-8 py-2 bg-amber-300 hover:bg-amber-100 hover:transition-all hover:duration-200 duration-200 transition-all hover:cursor-pointer rounded-full"
							type="submit"
						>
							Sign in
						</Button>
					</form>
					<div className="flex gap-2 items-center text-black">
						<p>Don&apos;t have account?</p>
						<Link className="hover:text-blue-900" href={"/sign-up"}>
							Sign Up
						</Link>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default SignInForm;
function zodResolver(
	FormSchema: any
):
	| import("react-hook-form").Resolver<z.infer<any>, any, z.infer<any>>
	| undefined {
	throw new Error("Function not implemented.");
}
