package valerkino.ru.backend.model;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class FormData {

	@NotBlank
	@Size(min = 3, max = 50)
	private String name;

	@Email
	@NotBlank
	@Size(min = 3, max = 50)
	private String email;

	@NotBlank
	@Size(min = 3, max = 50)
	private String subject;

	@NotBlank
	@Size(min = 10, max = 3000)
	private String message;

}
