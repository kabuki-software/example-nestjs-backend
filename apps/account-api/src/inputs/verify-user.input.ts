import { Field, InputType } from '@nestjs/graphql';
import { IVerifyUserInput } from '../interfaces';

/**
 * Verify User Input
 */
@InputType()
export class VerifyUserInput implements IVerifyUserInput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  expires: number;

  @Field()
  signature: string;
}