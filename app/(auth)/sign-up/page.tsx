import CustomLogo from "@/components/custom-logo";
import SignUpForm from "@/components/form/SignUpForm";

export default function SignUpPage() {
	return (
		<div className="flex flex-row items-center justify-around h-screen w-full p-8">
			<CustomLogo newUser={true} />
			<div>
				<SignUpForm />
			</div>
		</div>
	);
}
