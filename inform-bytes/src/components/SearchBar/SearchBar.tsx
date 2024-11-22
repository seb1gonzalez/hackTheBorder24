import { TextField } from "@mui/material";
import { FC, useState } from "react";

type SearchProps = {
    setQuestion: (q: string) => void
}

const SearchBar: FC<SearchProps> = ({
    setQuestion
}) => {
    const [input, setInput] = useState('');
    return (
        <TextField
            id="search_bar"
            variant="outlined"
            color="success"
            label="Submit a question"
            helperText="Press enter to submit"
            style={{margin: 5, width: '50%', borderColor: 'white'}}
            onChange={(event) => {setInput(event.target.value)}}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    setQuestion(input);
                }
            }}
        />
    );

};

export default SearchBar;