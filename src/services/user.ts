import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findUserById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`Movie ${userId} not found`)
  }

  return foundUser
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find()
}

const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

type Profile = {
  email: string
  given_name: string
  family_name: string
}

const findOneOrCreate = async (userProfile: Profile): Promise<UserDocument> => {
  const { email, given_name, family_name } = userProfile
  const foundUser = await User.findOne({ email: email })

  if (!foundUser) {
    const newUser = new User({
      email,
      given_name,
      family_name,
    })
    const createdUser = await newUser.save()
    return createdUser
  } else {
    return foundUser
  }
}

export default {
  create,
  findUserById,
  findAll,
  update,
  deleteUser,
  findOneOrCreate,
}
