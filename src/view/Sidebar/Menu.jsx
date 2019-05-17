import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { normalisePath } from '../../util/path';

import List from './List';
import ListItem from './Item';

const NavWrapper = styled.div`
    padding: 1rem;
`;

const NavTitle = styled.h4`
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 0.075em;
`;

const NavLink = styled(Link)`
    padding: 0.25rem 0;
    display: inline-block;
`;

class Menu extends React.Component {
    parseToMenuObject(patts) {
        let components = { files: [], folders: {} };
        let docs = { files: [], folders: {} };

        const addPathToNav = (nav, path, items, index = 0) => {
            if (index + 1 > path.length) {
                nav.files = [...nav.files, ...items.map(item => {
                    return {
                        name: item.name,
                        slug: item.slug
                    }
                })];
            } else {
                nav.folders[path[index]] = {
                    files: [],
                    folders: {}
                };

                let inc = index + 1;
                nav.folders[path[index]] = addPathToNav(nav.folders[path[index]], path, items, inc);
            }

            return nav;
        }

        patts.forEach(patt => {
            components = addPathToNav(components, patt.paths, patt.components);
            docs = addPathToNav(docs, patt.paths, patt.docs);
        });

        return { componentsNav: components, docsNav: docs };
    }

    render() {
        const { patts } = this.props;

        if (!patts) return null;

        const pattPaths = patts.keys().map(key => {
            const patt = patts(key).default;

            return {
                paths: normalisePath(key).split('/'),
                components: patt.components,
                docs: patt.docs
            }
        });

        const { componentsNav, docsNav } = this.parseToMenuObject(pattPaths);

        const addNavItems = (folder, folderPath = '') => {
            let fileItems = [];
            let folderItems = [];

            if (folder.files.length > 0) {
                fileItems = folder.files.map((item, index) =>
                    <ListItem key={index}>
                        {console.log(item)}
                        <NavLink to={`${folderPath}/${item.slug}`}>{item.name}</NavLink>
                    </ListItem>
                );
            }
            if (Object.keys(folder.folders).length > 0) {
                folderItems = Object.keys(folder.folders).map((key, index) => {
                    const newFolderPath = folderPath + '/' + key;
                    return (
                        <ListItem key={index} collapsible={true}>
                            {key}
                            <List>
                                {addNavItems(folder.folders[key], newFolderPath)}
                            </List>
                        </ListItem>
                    );
                });
            }
            return [...fileItems, ...folderItems];
        }

        const componentsItems = addNavItems(componentsNav);
        const docsItems = addNavItems(docsNav);

        return (
            <div>
                <NavWrapper>
                    <NavTitle>Components</NavTitle>
                    <List isOpen={true}>
                        {componentsItems}
                    </List>
                </NavWrapper>

                <NavWrapper>
                    <NavTitle>Documentation</NavTitle>
                    <List isOpen={true}>
                        {docsItems}
                    </List>
                </NavWrapper>
            </div>
        );
    }
}

export default Menu;