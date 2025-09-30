import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import React from "react";

export const Input: React.FC = () => {
	const [query, setQuery] = React.useState("");

	return (
		<Box margin={2}>
			<Box marginRight={1}>
				<Text>{`>`}</Text>
			</Box>
			<TextInput value={query} onChange={setQuery} />
		</Box>
	);
};
