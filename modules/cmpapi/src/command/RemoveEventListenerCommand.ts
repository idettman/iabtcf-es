import {Command} from './Command';
import {RemoveListenerCallback} from '../callback';
import {CmpApiModel} from '../CmpApiModel';

export class RemoveEventListenerCommand extends Command {

  protected success(): void {

    const callback = this.callback as RemoveListenerCallback;

    callback(true);

  }

  protected fail(): void {

    const callback = this.callback as RemoveListenerCallback;

    callback(false);

  }

  protected isValid(): boolean {

    return (typeof this.param === 'number' && CmpApiModel.eventQueue.remove(this.param));

  }

}
