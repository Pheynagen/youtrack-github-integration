package valerkino.ru.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import valerkino.ru.backend.model.FormData;
import valerkino.ru.backend.service.TelegramSender;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class FormDataController {

	private final TelegramSender telegramSender;

	@Autowired
	public FormDataController(TelegramSender telegramSender) {
		this.telegramSender = telegramSender;
	}

	@PostMapping("/post")
	private ResponseEntity<?> newMessage(@Valid @RequestBody FormData data) {
		log.info("Received message - {}", data);
		return telegramSender.sendMessage(data);
	}

}
