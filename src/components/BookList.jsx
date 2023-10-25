import SingleBook from "./SingleBook";

const BookList = ({ book }) => {
  return (
    <div>
      {book.map((book, index) => (
        <SingleBook key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
