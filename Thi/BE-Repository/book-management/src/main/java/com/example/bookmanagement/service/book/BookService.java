package com.example.bookmanagement.service.book;

import com.example.bookmanagement.dto.BookDTO;
import com.example.bookmanagement.dto.CategoryDTO;
import com.example.bookmanagement.model.Book;
import com.example.bookmanagement.repository.IBookRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;

    @Override
    public Page<BookDTO> findByName(String name, Pageable pageable) {
        List<BookDTO> bookDTOList = new ArrayList<>();
        Page<Book> bookPage = bookRepository.searchBook(name, pageable);
        BookDTO bookDTO;
            for (Book book : bookPage) {
                bookDTO = new BookDTO();
                bookDTO.setCategoryDTO(new CategoryDTO());
                BeanUtils.copyProperties(book.getCategory(), bookDTO.getCategoryDTO());
                BeanUtils.copyProperties(book, bookDTO);
                bookDTOList.add(bookDTO);
            }
        return new PageImpl<>(bookDTOList, bookPage.getPageable(), bookPage.getTotalElements());
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
    public BookDTO findById(int id) {
        BookDTO bookDTO = new BookDTO();
        Book book = bookRepository.findById(id);
        bookDTO.setCategoryDTO(new CategoryDTO());
        BeanUtils.copyProperties(book.getCategory(), bookDTO.getCategoryDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public void deleteBook(int id) {
        Book book = bookRepository.findById(id);
        book.setDeleted(true);
        bookRepository.save(book);
    }

    @Override
    public void editBook(Book book) {
        bookRepository.save(book);
    }
}
