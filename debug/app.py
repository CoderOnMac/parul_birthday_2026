"""
Python Debugging Harness for Learning

This is a learning sandbox to understand code execution flow.
The production application is JavaScript-based; this Python script
demonstrates the conceptual flow of the application state machine.

Purpose: Educational/Debugging Sandbox
NOT part of production deployment
"""

import debugpy
import time

# Enable debugpy to wait for debugger to attach
# Port 5678 is the default for VS Code Python debugging
debugpy.listen(("localhost", 5678))
print("Waiting for debugger to attach on port 5678...")
debugpy.wait_for_client()
print("Debugger attached! Starting execution...")

# Simulate the application state
class AppState:
    def __init__(self):
        self.phase = "landing"
        self.question_index = 0
        self.answers_locked = False
        self.surprise_step = 0
        self.reveal_step = 0

    def __repr__(self):
        return f"AppState(phase={self.phase}, question={self.question_index})"


# Simulate the state machine
def main():
    """Main execution flow - mirrors the JavaScript application"""
    
    # Initialize state
    state = AppState()
    print(f"Initial state: {state}")
    
    # Simulate landing phase
    print("\n=== Landing Phase ===")
    state.phase = "landing"
    print(f"State: {state}")
    time.sleep(1)
    
    # Simulate user clicking start
    print("\n=== User clicks start ===")
    start_game(state)
    
    # Simulate question phase
    print("\n=== Question Phase ===")
    state.phase = "question"
    state.question_index = 0
    print(f"State: {state}")
    time.sleep(1)
    
    # Simulate user answering
    print("\n=== User answers question ===")
    on_select_answer(state, option_index=0)
    
    # Simulate reaction phase
    print("\n=== Reaction Phase ===")
    state.phase = "reaction"
    print(f"State: {state}")
    time.sleep(1)
    
    # Simulate advancing
    print("\n=== Advancing to next ===")
    advance_after_reaction(state)
    
    # Simulate surprise phase
    print("\n=== Surprise Phase ===")
    state.phase = "surprise"
    print(f"State: {state}")
    time.sleep(1)
    
    # Simulate reveal phase
    print("\n=== Reveal Phase ===")
    state.phase = "reveal"
    print(f"State: {state}")
    
    print("\n=== Execution Complete ===")
    print("Final state:", state)


def start_game(state):
    """Simulates the startGame() function from main.js"""
    print("start_game() called")
    debugpy.breakpoint()  # Breakpoint here
    state.phase = "question"
    state.question_index = 0
    state.answers_locked = False
    print(f"State updated: {state}")


def on_select_answer(state, option_index):
    """Simulates the onSelectAnswer() function from main.js"""
    print(f"on_select_answer() called with option {option_index}")
    debugpy.breakpoint()  # Breakpoint here
    
    if state.answers_locked:
        print("Answers already locked, ignoring")
        return
    
    state.answers_locked = True
    print(f"Answer locked: {state}")
    
    # Simulate picking a reaction
    reaction = pick_reaction(option_index)
    print(f"Reaction: {reaction}")


def pick_reaction(option_index):
    """Simulates the pickReaction() function from main.js"""
    reactions = {
        0: "Obviously your smile.",
        1: "Your eyes are dangerous in the best way.",
        2: "I love your laugh.",
        3: "Your hair is unfairly perfect.",
    }
    return reactions.get(option_index, "Interesting choice...")


def advance_after_reaction(state):
    """Simulates the advanceAfterReaction() function from main.js"""
    print("advance_after_reaction() called")
    debugpy.breakpoint()  # Breakpoint here
    
    # Check if last question
    is_last = state.question_index >= 4  # Assuming 5 questions
    
    if is_last:
        print("Last question, moving to surprise")
        state.phase = "surprise"
        state.surprise_step = 0
    else:
        print(f"Not last question, moving to question {state.question_index + 1}")
        state.question_index += 1
        state.answers_locked = False
        state.phase = "question"
    
    print(f"State updated: {state}")


if __name__ == "__main__":
    print("=" * 60)
    print("Python Debugging Harness")
    print("=" * 60)
    print("\nThis script demonstrates the application's state machine.")
    print("Set breakpoints in VS Code to step through the code.")
    print("\nPress F5 in VS Code to attach the debugger.")
    print("=" * 60)
    print()
    
    main()
