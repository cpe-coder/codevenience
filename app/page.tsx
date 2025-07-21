"use client";

import CustomLogo from "@/components/custom-logo";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
export default function Home() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/sign-in");
		}, 2000);
	});

	return (
		<div className="h-screen w-full flex items-center justify-center p-8">
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.4,
					scale: { type: "spring", visualDuration: 1.5, bounce: 0.5 },
				}}
			>
				<CustomLogo />
			</motion.div>
		</div>
	);
}
