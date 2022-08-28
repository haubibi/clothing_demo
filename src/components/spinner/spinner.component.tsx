import { SpinnerOverlay, SpinnerContainer} from './spinner.styles';
import { FC } from 'react';

const Spinner:FC = () =>{
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}

export default Spinner;