import CustomLogo from "@/components/custom-logo";
import SignInForm from "@/components/form/SignInForm";

export default function SignInPage() {
	return (
		<div className="flex flex-row items-center justify-around h-screen w-full p-8">
			<CustomLogo />
			<div>
				<SignInForm />
			</div>
		</div>
	);
}
