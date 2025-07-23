import mongoose, { Model, Schema } from "mongoose";

interface IUser extends Document {
	id: "string";
	firstName: string;
	lastName: string;
	businessName: string;
	email: string;
	phone?: string;
	address?: string;
	jobTitle?: string;
	password: string;
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
	phone: {
		type: String,
		require: false,
	},
	address: {
		type: String,
		require: false,
	},
	jobTitle: {
		type: String,
		require: false,
	},
	password: {
		type: String,
		required: true,
	},
});

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
