import mongoose, { Model, Schema } from "mongoose";

interface IUser extends Document {
	id: "string";
	firstName: string;
	lastName: string;
	businessName: string;
	email: string;
	password?: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	businessName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: false,
	},
});

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
