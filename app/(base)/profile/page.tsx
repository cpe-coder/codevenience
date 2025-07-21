import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, UserRound } from "lucide-react";

export default function Profile() {
	return (
		<div className="flex flex-col w-full h-full  p-10 justify-center space-y-6">
			<div className="shadow p-2 rounded-md flex gap-2 items-center justify-between">
				<div className="flex items-center ">
					<Button className="bg-transparent border-0 hover:bg-slate-200 hover:cursor-pointer">
						<ArrowLeft color="black" />
					</Button>
					<div>
						<h1 className="text-black font-medium text-xls">
							Profile Management
						</h1>
						<p className="text-xs font-medium text-slate-500">
							Manage your account settings and preferences
						</p>
					</div>
				</div>
				<div>
					<Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:cursor-pointer">
						<Edit />
						<p>Edit Profile</p>
					</Button>
				</div>
			</div>
			<div className="flex space-x-6 items-center">
				<div className="shadow rounded-md w-56">
					<div className="p-2 border-2 w-14 h-14 rounded-full border-gray-400">
						<UserRound color="gray" />
					</div>
				</div>
				<div className="shadow">hellow</div>
			</div>
		</div>
	);
}
