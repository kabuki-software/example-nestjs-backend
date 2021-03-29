import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignAccessTokenCommand } from '../commands/sign-access-token.command';
import { UserService } from '../services/user.service';

/**
 * Sign Access Token Command Handler
 */
@CommandHandler(SignAccessTokenCommand)
export class SignAccessTokenCommandHandler
  implements ICommandHandler<SignAccessTokenCommand> {
  /**
   * Constructor
   *
   * @param {UserService} userService
   */
  constructor(private userService: UserService) {}

  /**
   * Execute
   *
   * @param {SignAccessTokenCommand} command
   * @returns
   */
  async execute(command: SignAccessTokenCommand): Promise<string> {
    return this.userService.signAccessToken(command.user);
  }
}
