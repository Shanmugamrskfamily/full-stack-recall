import { User } from "../models/userModel.js";

const getUser = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found!' });
        }
        return res.status(200).json({ message: 'User found!', User_Details: user });
    } catch (error) {
        console.error(`Server Error: ${error}`);
        return res.status(500).json({ message: 'Server Down!', Error: error.message });
    }
};

const updateUser = async (req, res) => {
    const userId = req.user.id;
    const { firstName, lastName, profilePictureUrl } = req.body;
    try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found!' });
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.profilePictureUrl = profilePictureUrl;
        user = await user.save();
        return res.status(200).json({ message: 'Profile Updated', user });
    } catch (error) {
        console.error(`Server Error: ${error}`);
        return res.status(500).json({ message: 'Server Down!', Error: error.message });
    }
};

const getUserProfilePic = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found!' });
        }
        return res.status(200).json({ message: 'User Profile Picture Found!', profilePic: user.profilePictureUrl });
    } catch (error) {
        console.error(`Server Error: ${error}`);
        return res.status(500).json({ message: 'Server Down!', Error: error.message });
    }
};

export default { getUser, updateUser, getUserProfilePic };
