import slugify from 'slugify';

class Pattern {
    constructor(title) {
        this.title = title;
        this.components = [];
        this.docs = [];
        this.state = {};
        this.hugFn = null;

        return this;
    }

    hug(hugFn) {
        this.hugFn = hugFn;

        return this;
    }

    add(name, component, doc = null, docComponents = null) {
        this.components.push({
            name: name,
            component: component,
            doc: doc,
            docComponents: docComponents,
            slug: slugify(name.toLowerCase(), '-')
        });

        return this;
    }

    addDoc(name, doc, docComponents = null) {
        this.docs.push({
            name: name,
            doc: doc,
            docComponents: docComponents,
            slug: slugify(name.toLowerCase(), '-')
        });

        return this;
    }

    setState(state) {
        this.state = state;

        return this;
    }
}

export default (title) => { return new Pattern(title) };