import { WorksContainer } from '@features/landing/works';
import LandingLayout from '@layouts/landing/LandingLayout';
import { FC } from 'react'

interface WorksProps {

}

const Works: FC<WorksProps> = ({ }) => {
    return (
        <LandingLayout>
            <WorksContainer />
        </LandingLayout>
    )
}

export default Works;