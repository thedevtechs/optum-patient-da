import { TextInput } from '@mantine/core';
import Link from "next/link";
import Image from "next/image";
import search from "../../public/images/standard/search.png";
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchComponent() {
    const router = useRouter();

    const searchTextInputElement = useRef(null)

    const [searchText, setSearchText] = useState("");

    const onSearch = () => {
        if (searchText.length > 0) {
            try {
                router.push(`/search?s=${searchText}`);
                searchTextInputElement.current.value = "";
            } catch (error) {
                console.log(error);
            }
        }
    };

    return <>
        <TextInput
            placeholder="Search"
            className={'rounded home-search'}
            styles={(theme) => ({
                input: {
                    fontFamily: "'Optum-Sans', Arial, sans-serif",
                    fontSize: "12.64px !important",
                    letterSpacing: ".04rem !important",
                    lineHeight: "16px !important",
                    rightSection: { pointerEvents: 'none' }
                }
            })}
            rightSectionWidth={40}
            rightSection={
                <Link href={'/'}>
                    <Image alt={"search-img"} src={search} height={20} width={20} style={{}} onClick={() => onSearch()} />
                </Link>
            }
            onChange={(ev) => setSearchText(ev.target.value)}
            onKeyUp={(ev) => {
                if (ev.keyCode == 13) {
                    onSearch();
                }
            }}
            ref={searchTextInputElement}
        />
    </>
}