"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
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
	phone: z.string().min(10, "Number is required").max(10, "Invalid number"),
	jobTitle: z.string().min(1, "Business name is required"),
});

const PersonalInformation = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			jobTitle: "",
		},
	});

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		try {
			console.log(values);
		} catch (error) {
			console.error("Error during sign in:", error);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full grid grid-cols-2 gap-2 space-x-4 "
			>
				<div className="flex flex-col space-y-2">
					<Label htmlFor="firstName" className="text-slate-700">
						First Name
					</Label>
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Maria"
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
					<Label htmlFor="firstName" className="text-slate-700">
						Last Name
					</Label>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Santos"
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
					<Label htmlFor="email" className="text-slate-700">
						Email Address
					</Label>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Santos"
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
					<Label htmlFor="phone" className="text-slate-700">
						Phone Number
					</Label>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Santos"
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
					<Label htmlFor="jobTitle" className="text-slate-700">
						Job Title
					</Label>
					<FormField
						control={form.control}
						name="jobTitle"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Santos"
										className=" text-slate-500 bg-slate-200 rounded-md mb-2 active:outline-none focus:outline-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
};

export default PersonalInformation;
