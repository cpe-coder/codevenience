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
	businessName: z.string().min(1, "Business name is required"),
	address: z.string().min(1, "Address name is required"),
});

const BusinessDetails = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			businessName: "",
			address: "",
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
					<Label htmlFor="businessName" className="text-slate-700">
						Business Name
					</Label>
					<FormField
						control={form.control}
						name="businessName"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Margie Codevenience"
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
					<Label htmlFor="address" className="text-slate-700">
						Address
					</Label>
					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Malitbog, Bongabong, Oriental Mindoro"
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

export default BusinessDetails;
