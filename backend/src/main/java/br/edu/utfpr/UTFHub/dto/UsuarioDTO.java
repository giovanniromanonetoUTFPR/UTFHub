package br.edu.utfpr.UTFHub.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsuarioDTO {
	private Long id;
	private String nome;
	private String email;
	private String campus;
	private String curso;
	private boolean admin;

	public UsuarioDTO(Long id, String nome, String email, String campus, String curso) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.campus = campus;
		this.curso = curso;
	}
}

