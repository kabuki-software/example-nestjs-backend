import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { IUserType } from '../../interfaces/user.type';

/**
 * User Type
 */
@ObjectType('User')
export class UserType implements IUserType {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  isActivated: boolean;

  @Field()
  isBlocked: boolean;

  @Field()
  isVerified: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @Field(() => GraphQLISODateTime)
  updatedAt: string;

  @Field(() => GraphQLISODateTime)
  removedAt: string;
}
