package com.example.bookmanagement.service.book;

import com.example.bookmanagement.dto.BookDTO;
import com.example.bookmanagement.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<BookDTO> findByName(String name, Pageable pageable);

    void save(Book book);

    BookDTO findById(int id);

    void deleteBook(int id);

    void editBook(Book book);
}
