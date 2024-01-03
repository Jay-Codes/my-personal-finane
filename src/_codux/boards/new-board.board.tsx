import { createBoard } from '@wixc3/react-board';
import Signin from '../../mui_components/Authentication/Signin';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <Signin />
    </div>,
    isSnippet: true,
});
