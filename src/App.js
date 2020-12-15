import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating Components'
    }
];


const options = [
    {
        label: 'The color Red',
        color: 'red'
    },
    {
        label: 'The shade of Blue',
        color: 'blue'
    },
    {
        label: 'The color Green',
        color: 'green'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <DropDown options={options}
                          label="Select a color"
                          selected={selected}
                          onSelectedChanged={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
