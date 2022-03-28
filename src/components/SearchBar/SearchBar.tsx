import { FC } from 'react';
import { Input, InputGroup, InputRightElement, InputLeftElement, InputProps, Spinner } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi';
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader } from 'components/Loader';
import { useNavigate } from '@tanstack/react-location';

const SearchBar: FC<InputProps> = ({ ...rest }) => {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<{ searchInput: string }>();

    const navigate = useNavigate();

    // using a form submit handler, to avoid making multiple api calls whenever the search input changes
    const onSubmit: SubmitHandler<{ searchInput: string }> = data => {
        // make call to api, for now just navigate to results page
        navigate({ to: `/search/results/${data.searchInput}`, replace: true })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
                {isSubmitting && <Loader />}

                <InputLeftElement
                    pointerEvents='none'
                    children={<FiSearch color='gray.300' />}
                />
                <Input
                    {...rest}
                    {...register('searchInput')}
                />
                <InputRightElement>
                    {isSubmitting && <Spinner />}
                </InputRightElement>
            </InputGroup>
        </form>
    )
}

export default SearchBar

SearchBar.defaultProps = {
    maxWidth: '24rem',
    type: 'text',
    placeholder: 'Search for Artists...'
}
