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
				<div>
					<div className="flex flex-col space-y-3 justify-center text-center shadow rounded-md w-90 p-6">
						<div className="flex-1 items-center justify-center p-6 border-4 border-purple-500/20 self-center rounded-full">
							<UserRound className="w-12 h-12" color="gray" />
						</div>
						<div className="text-center">
							<h1 className="text-2xl font-medium text-slate-700">
								Maria Santos
							</h1>
							<h2 className="text-md font-normal text-slate-500">
								Store Manager
							</h2>
							<p className="text-xs font-normal text-slate-400">Operations</p>
						</div>
						<div>
							<Button className="bg-purple-500/10 rounded-full text-purple-500">
								Manager
							</Button>
						</div>
						<p className="text-sm font-normal text-slate-500">
							Oversee operations and manage team members
						</p>
					</div>
					<div className="flex flex-col justify-center text-center shadow rounded-md w-90 p-6">
						<h1>Simulate User Role:</h1>
					</div>
				</div>
				<div className="shadow">hellow</div>
			</div>
		</div>
	);
}
