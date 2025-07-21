import { Scan } from "lucide-react";

const CustomLogo = () => {
	return (
		<div className="flex gap-2 items-center">
			<div className="p-2 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center gap-2">
				<Scan size={60} />
			</div>
			<div className=" flex flex-col">
				<h1 className="bg-gradient-to-r text-5xl pb-2 font-bold from-purple-500 to-indigo-500 bg-clip-text text-transparent">
					Margie Codevenience
				</h1>
				<p className="text-2xl font-medium text text-slate-500">
					Smart Business Management Platform
				</p>
			</div>
		</div>
	);
};

export default CustomLogo;
