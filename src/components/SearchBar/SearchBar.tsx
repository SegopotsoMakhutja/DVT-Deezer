import { Input, InputGroup, InputRightElement, InputLeftElement, Spinner, InputProps } from '@chakra-ui/react'
import { FC, useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { ArtistDataContext } from 'context/ArtistContextProvider';
import { Loader } from 'components/Loader';
import { useNavigate } from '@tanstack/react-location';

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const SearchBar: FC<InputProps> = ({ ...rest }: InputProps) => {
    const [artistDetails, setArtistDetails] = useState([]);

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<{ searchInput: string }>();
    const { updateArtistData } = useContext(ArtistDataContext);

    const navigate = useNavigate();
    // using a form submit handler, to avoid making multiple api calls whenever the search input changes
    const onSubmit: SubmitHandler<{ searchInput: string }> = async (data, e) => {
        e?.preventDefault();
        await axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/search/artist?q=${data.searchInput}`).then((res) => {
            setArtistDetails(res.data.data);
        })

        updateArtistData({
            artistDetails: artistDetails,
            artistName: data.searchInput
        });

        navigate({ to: `/search/results/${data.searchInput}`, replace: true })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<FiSearch color='gray.300' type={"submit"} />}
                />
                <Input
                    {...rest}
                    {...register('searchInput')}
                />
                <InputRightElement
                    pointerEvents='none'
                    children={isSubmitting && <Spinner />}
                />
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
