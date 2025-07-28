import { New } from "@/constant/icon";
import { Scan } from "lucide-react";
import Image from "next/image";

interface NewProps {
	newUser?: boolean;
}

const CustomLogo = ({ newUser }: NewProps) => {
	return (
		<div className="hidden lg:flex gap-2 items-center">
			<div className="p-2 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center gap-2">
				<div className="relative">
					<Scan size={60} />
					{newUser && (
						<Image
							className="absolute w-8 -right-3 -top-3"
							src={New}
							alt="New"
						/>
					)}
				</div>
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
