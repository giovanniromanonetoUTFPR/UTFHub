package br.edu.utfpr.UTFHub.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, length = 128)
	private String nome;
	@Column(nullable = false, unique = true, length = 64)
	private String email;
	@Column(nullable = false, length = 128)
	private String senha;
	@Column(nullable = false, length = 64)
	private String campus;
	@Column(nullable = false, length = 64)
	private String curso;
	@Column(nullable = true, length = 2048)
	private String imagem;
	@Column(columnDefinition = "boolean default false", nullable = false)
	private boolean admin;

	@OneToMany(
			cascade = CascadeType.ALL
	)
	@JoinColumn(name = "autorId", referencedColumnName = "id")
	@JsonIgnore
	private List<Post> posts = new ArrayList<>();

}
