import { IEvent } from '@nestjs/cqrs';
import { AccountEntity, EmailEntity, UserEntity } from '../entities';

/**
 * Account Created Event
 */
export class AccountCreatedEvent implements IEvent {
  /**
   * Constructo
   *
   * @param {UserEntity} user
   * @param {EmailEntity} email
   * @param {AccountEntity} account
   */
  constructor(
    public readonly user: UserEntity,
    public readonly email: EmailEntity,
    public readonly account: AccountEntity,
  ) {}
}
