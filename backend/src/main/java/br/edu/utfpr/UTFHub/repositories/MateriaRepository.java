package br.edu.utfpr.UTFHub.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.utfpr.UTFHub.entities.Materia;
import org.springframework.stereotype.Repository;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Long> {
    Page<Materia> findByNomeContaining(String nome, Pageable pageable);
}
