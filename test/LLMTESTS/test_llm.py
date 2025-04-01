import pytest
from unittest.mock import patch
from my_module import query_llm_robust  # Update this import with the actual module name and functions

@pytest.fixture
def mock_chat_completions():
    with patch("client.chat.completions.create") as mock_create:
        yield mock_create

def test_unexpected_translation(mock_chat_completions):
    """Tests the case where the translation returns an unexpected response."""
    mock_chat_completions.return_value.choices = [{"message": {"content": 123}}]  # Simulate unexpected type
    assert query_llm_robust("Hola, ¿cómo estás?") == (False, "Hola, ¿cómo estás?")

def test_language_detection_exception(mock_chat_completions):
    """Tests the case where language detection raises an exception."""
    mock_chat_completions.side_effect = Exception("Simulated language detection error")
    assert query_llm_robust("Bonjour le monde!") == (False, "Bonjour le monde!")

def test_translation_exception(mock_chat_completions):
    """Tests the case where translation raises an exception."""
    mock_chat_completions.side_effect = Exception("Simulated translation error")
    assert query_llm_robust("Hola, ¿cómo estás?") == (False, "Hola, ¿cómo estás?")

def test_unexpected_language_detection_format(mock_chat_completions):
    """Tests the case where language detection returns an unexpected format."""
    mock_chat_completions.return_value.choices = [{"message": {"content": 123}}]  # Unexpected format
    assert query_llm_robust("Hier ist dein erstes Beispiel.") == (False, "Hier ist dein erstes Beispiel.")
    