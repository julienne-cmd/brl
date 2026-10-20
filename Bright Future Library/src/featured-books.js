import React, { createElement as h } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const books = [
  {
    title: "Our Lady of the Nile",
    author: "Scholastique Mukasonga",
    genre: "Novel",
    coverType: "gold",
    coverLabel: "Fiction",
    description:
      "At a girls' boarding school in 1970s Rwanda, friendships and ambition unfold amid social divisions and rising political tension.",
  },
  {
    title: "The Barefoot Woman",
    author: "Scholastique Mukasonga",
    genre: "Memoir",
    coverType: "blue",
    coverLabel: "Memoir",
    description:
      "A tender tribute to the author's mother, preserving family memories, traditions, and the life they shared in rural Rwanda.",
  },
  {
    title: "The Girl Who Smiled Beads",
    author: "Clemantine Wamariya with Elizabeth Weil",
    genre: "Memoir",
    coverType: "rose",
    coverLabel: "Memoir",
    description:
      "A young girl's journey from Rwanda through refugee camps and toward a new life in the United States.",
  },
];

function BookCard({ book }) {
  return h(
    "article",
    { className: "featured-book-card" },
    h(
      "div",
      {
        className: `book-card-cover book-card-cover--${book.coverType}`,
        "aria-hidden": "true",
      },
      h("span", { className: "book-card-cover-label" }, `Bright Future · ${book.coverLabel}`),
      h("span", { className: "book-card-cover-title" }, book.title),
      h("span", { className: "book-card-cover-mark" }),
    ),
    h(
      "div",
      { className: "book-card-content" },
      h("span", { className: "book-card-genre" }, book.genre),
      h("h3", null, book.title),
      h("p", { className: "book-card-author" }, book.author),
      h("p", { className: "book-card-description" }, book.description),
    ),
  );
}

function FeaturedBooks() {
  return h(
    React.Fragment,
    null,
    ...books.map((book) => h(BookCard, { book, key: book.title })),
  );
}

const mount = document.getElementById("featured-books-root");
if (mount) {
  createRoot(mount).render(h(FeaturedBooks));
}
