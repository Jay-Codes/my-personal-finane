import { createBoard } from '@wixc3/react-board';
import SignUp from '../../mui_components/Authentication/SignUp';

export default createBoard({
    name: 'SignUp',
    Board: () => <div>
        <SignUp />
    </div>,
    isSnippet: true,
});
